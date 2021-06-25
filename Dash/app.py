from function import *
import flask
import random
from flask import jsonify
from flask import Flask,Response,request,send_from_directory
from flask_cors import CORS
from flask_mysqldb import MySQL

app = flask.Flask(__name__)
CORS(app)
app.debug = True


app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'skillspacedb'

mysql = MySQL(app)

@app.route('/cnx', methods=['GET', 'POST'])
def index():
    if request.method == "GET":
        details = request.form
        #firstName = details['fname']
        #lastName = details['lname']
        cur = mysql.connection.cursor()
        
        cur.execute("select * from formation")
        
        formations = cur.fetchall()
        
        for i in parsed: 
            coursename = i["course_name"]
            description = i["course_description"]
           
            level = i["course_level"] 
            
            if level == "Débutant":
                level = "BEGINNER"
            if level == "Tous les niveaux":
                level = "INTERMEDIATE"          
            if level == "Confirmé":
                level = "ADVANCED"
            if level == "Intermédiaire":
                level = "INTERMEDIATE"   
                
            price = i["course_price"]
            
            formateur = "7"
            
        mysql.connection.commit()
        
        cur.close()
        return 'success'
    return 'failure'



@app.route('/addAvis', methods=['GET', 'POST'])
def addAvis():
    if request.method == "GET":
        details = request.form
        #firstName = details['fname']
        #lastName = details['lname']
        cur = mysql.connection.cursor()
        
        cur.execute("select * from formation")
        
        formations = cur.fetchall()

        for f in formations:
            idformation = f[0]
            rate = random.randint(1, 5)
            nb_rate = random.randint(1, 2000)
            idutilisateur = "9"
            for i in range(nb_rate):
                
                cur.execute("insert into avis(rate,formation_idFormation,utilisateur_idutilisateur) values(%s,%s,%s)",(rate,idformation,idutilisateur))
                
                
        mysql.connection.commit()
        
        cur.close()
        return 'success'
    return 'failure'



@app.route("/static/img/<path:path>")
def static_dir(path):
    print(path)
    return send_from_directory("static", path)

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

@app.route('/getImageByName/<path:name>',methods=['GET'])
def static_file(name):
    print(name)
    return app.send_static_file(name)


app.run(port=5006)