#!/usr/bin/env python3
"""Asynchronous comprehension example."""

from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Generate 10 random numbers comprehensionsly."""
    return [number async for number in async_generator()]
