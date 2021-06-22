from function import *
import flask
from flask import jsonify
from flask import Flask,Response,request
from flask_cors import CORS
app = flask.Flask(__name__)
CORS(app)
app.debug = True




@app.route('/allcourses', methods=['GET'])
def getallcourcess():
    return getallcources()

@app.route('/getFormationById/<path:id>', methods=['GET'])
def getcoursebyidd(id):
	return getCourseById(id)

@app.route('/topRated', methods=['GET'])
def getMostRatedCours():
    return getMostRatedCourse()

@app.route('/pred/<path:name>', methods=['GET'])
def scrape(name):
	return pred(name)


app.run(port=5006)