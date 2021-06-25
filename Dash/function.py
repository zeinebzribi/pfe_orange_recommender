
import numpy as np
import pandas as pd 
import math
from sklearn.metrics.pairwise import cosine_similarity
from sentence_transformers import SentenceTransformer
from bson.json_util import dumps
# load numpy array from csv file
from numpy import loadtxt
from flask import *
import json

udemy_all_courses = pd.read_csv("udemy_all_courses.csv",sep='\t')


def combined_features(row):
    return row['course_name']+" "+row['course_description']+" "+row['course_level']

def cosinesimilarity(sentence,i):
	return cosine_similarity([sentence],i)

def pred(course_nam):
    #course_nam=str(course_nam)
    l=[]
    udemy_all_courses = pd.read_csv("udemy_all_courses.csv",sep='\t')
    #udemy_all_courses=udemy_all_courses.reset_index()
    udemy_all_courses["combined_features"] = udemy_all_courses.apply(combined_features, axis =1)
    sentences = udemy_all_courses['combined_features']
    sentence_vec = loadtxt('weights.csv', delimiter=',') 
    
    try:
        arrayy = cosinesimilarity(sentence_vec[udemy_all_courses.index[udemy_all_courses['_id'] == course_nam]][0],sentence_vec[0:])
    except:
        return jsonify(message='not found',status=500),500
        
    idx = (-arrayy).argsort()[:5]
    
    temp = np.argpartition(-arrayy, 4)
    
    result_args = temp[:4]
    
    sorted_results = result_args[0][0:4]
    
    for item in sorted_results:
        l.append(udemy_all_courses[udemy_all_courses.index==item])
        
    return jsonify(message=dumps(l),status=200),200


def getallcources():

    udemy_all_courses = pd.read_csv("udemy_all_courses.csv",sep='\t')
    #print(udemy_all_courses.columns)
    result = udemy_all_courses.to_json(orient="records")
    parsed = json.loads(result)


    return jsonify(message=json.dumps(parsed, indent=4),status=200),200




def getCourseById(id):

    course = udemy_all_courses.loc[udemy_all_courses['_id']==id]
    #print(udemy_all_courses.columns)
    result = course.to_json(orient="records")
    parsed = json.loads(result)

    return jsonify(message=json.dumps(parsed, indent=4),status=200),200


def weighted_rating(x, m=udemy_all_courses['course_number_ratings'].quantile(0.90), C=udemy_all_courses['course_rating'].mean()):
	v = x['course_number_ratings']
	R = x['course_rating']
	# Calculation based on the IMDB formula
	return (v/(v+m) * R) + (m/(m+v) * C)

def getMostRatedCourse():
	m=udemy_all_courses['course_number_ratings'].quantile(0.90)

	q_course = udemy_all_courses.copy().loc[udemy_all_courses['course_number_ratings'] >= m]
	q_course['score'] = q_course.apply(weighted_rating, axis=1)
	q_course = q_course.sort_values('score', ascending=False)
	most_rated = q_course[['_id','course_name', 'course_number_ratings', 'course_rating', 'score','images']].head(6)
	
	result = most_rated.to_json(orient="records")
	parsed = json.loads(result)

	return jsonify(message=parsed,status=200),200