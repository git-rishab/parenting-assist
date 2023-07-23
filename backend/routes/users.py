from flask import request, jsonify
import os
from models.db import (
    user,
    message
)

def register():
    details = request.json
    check = list(user.find({"email":details['email']}))

    if len(check) > 0 :
        return jsonify({"ok":False, "message":"User Already Registered"}), 400
    else :
        user.insert_one(details)
        return jsonify({"ok":True, "message":"Registration successfull"})
        

def login():
    details = request.json
    check = list(user.find({"email": details['email'], "password":details['password']}))
    if len(check) > 0 :
        return jsonify({"ok":True, "message":"Login Successfull", 'data':{'name':check[0]['name'], 'email':check[0]['email']}})
    else :
        return jsonify({"ok":False, "message":"Invalid Email or password"})