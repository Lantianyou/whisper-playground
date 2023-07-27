from pydub import AudioSegment
from pyannote.audio import Pipeline


audio = AudioSegment.from_mp3("audio.mp3")

pipeline = Pipeline.from_pretrained("pyannote/speaker-diarization")

DEMO_FILE = {"uri": "audio.mp3", "audio": "audio.mp3"}

dz = pipeline(DEMO_FILE)

with open("diarization.txt", "w") as text_file:
    text_file.write(str(dz))

import re

dz = open("diarization.txt", "r").read().splitlines()
dz_list = []
for l in dz:
    start, end = tuple(re.findall("[0-9]+:[0-9]+:[0-9]+\.[0-9]+", string=l))
    lex = not re.findall("SPEAKER_01", string=l)
    dz_list.append([start, end, lex])
