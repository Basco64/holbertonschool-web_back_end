#!/usr/bin/env python3
"""pagination"""


def index_range(page, page_size) -> tuple:
    """Return start and end index for pagination"""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
