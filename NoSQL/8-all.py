#!/usr/bin/env python3
""" lists all documents in a collection"""


def list_all(collection):
    """ lists all documents in a collection"""
    return collection.find()
