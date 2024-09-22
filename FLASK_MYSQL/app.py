# from flask import Flask
# from flask_cors import CORS
# from controller import *
# app=Flask(__name__)
# CORS(app)

# @app.route("/")
# def Home():
#     return "Apis returns Successfully"


# if __name__=='__main__':
#     app.run(host='127.0.0.1',port=9004,debug=False)


# from flask import Flask
# from controller import user_controller
# from controller import admin_controller
# app = Flask(__name__)

# @app.route("/")
# def Home():
#     return "Apis returns Successfully"

 
# # Register blueprint
# app.register_blueprint(user_controller.user_blueprint)
 
# if __name__ == "__main__":
#     app.run(debug=True)
 
 
 
from flask import Flask
from flask_cors import CORS
from model.user_model import user_model

app=Flask(__name__)
CORS(app)
obj = user_model()

@app.route("/")
def Home():
    return "Apis return Successfully"




@app.route("/user/signup")
def user_signup_controller():
    return obj.user_signup_model()

@app.route("/user/getall")
def user_getall_model():
    return obj.user_getall_model()


if __name__=="__main__":
    app.run(host='127.0.0.1',port=9006,debug=False)