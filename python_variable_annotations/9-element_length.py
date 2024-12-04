#!/usr/bin/env python3
"""Annotate function’s params and return values with the types"""


from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Annotate function’s params and return values with the types"""
    return [(i, len(i)) for i in lst]
