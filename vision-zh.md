超长期目标：标注即微调工具，比如你有一段1小时录音，是在讨论一个叫 FooBar 的公司，在转录的前 10 秒钟，你发现 FooBar 被输出成 foo bar, 那么在前端用富文本编辑器改成 FooBar, 相当于标注了这段语音，这个新标注的数据被送给 AI ， AI 根据这个新标注的数据重新训练，因为只有 10 秒钟重新标注的数据，所以重新训练的过程应该也比较快。所有的 foo bar 都被输出成 FooBar

我们认为，微调后的 AI 模型后很有价值。AGI 就像电影明星，每个人都能欣赏；微调后的 AI 像是体贴女友，对你了解万分

Whisper 是使用 Common Voice 数据集标注的，[见此](https://huggingface.co/datasets/mozilla-foundation/common_voice_11_0/viewer/ab/train?row=5)，核心维度只有原语音和文字两条。Whisper 利用了 ffmpeg ，把语音文件切成一段段转录，从 Whisper 代码里略加改动能找到当前修改文字背后的语音，文字就是富文本编辑器编辑后的文字

![image](https://github.com/Lantianyou/whisper-playground/assets/37259750/6b8fbd05-f786-4b85-8105-1b573d6ad5ca)
