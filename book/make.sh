#!/bin/bash
# usage: make.sh <volume 1|2|3>
set -e; cd /home/user/ifrs/book; V=$1
python3 build.py $V && node render.js $V && python3 pages.py $V && python3 build.py $V && node render.js $V && python3 pages.py $V
