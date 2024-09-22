# from app import app
# from model.user_model import user_model
# obj=user_model()
# @app.route("/user/signup")
# def user_signup_controller():
#     return obj.user_signup_model()

# from flask import Blueprint
# from model.user_model import user_model
 
# user_blueprint = Blueprint('user', __name__)
 
# # Instantiate the user model object
# obj = user_model()
 
# @user_blueprint.route("/user/signup")
# def user_signup_controller():
#     return obj.user_signup_model()


from model.user_model import user_model
obj = user_model()

def user_signup_controller():
    return obj.user_signup_model()