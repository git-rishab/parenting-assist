from flask import request, jsonify
import os
from models.db import (
    user,
    message
)

def register():
    details = request.json
    user.insert_one(details)
    return jsonify({"ok":True, "message":"Registration successfull"})

def login():
    details = request.json
    check = list(user.find({"email": details['email'], "password":details['password']}))
    print(check)
    if len(check) > 1 :
        return jsonify({"ok":True, "message":"Login Successfull"})
    else :
        return jsonify({"ok":False, "message":"Invalid Email or password"})