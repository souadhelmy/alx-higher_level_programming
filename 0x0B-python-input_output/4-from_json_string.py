#!/usr/bin/python3
"""Write a string-to-JSON function."""
import json


def from_json_string(my_str):
    """ Returns the JSON representation of an object - string."""
    return json.loads(my_str)
