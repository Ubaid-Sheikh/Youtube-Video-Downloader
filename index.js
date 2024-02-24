const express = require('express');
const app = express();
const ytdl = require('ytdl-core');



app.set('view engine', 'ejs');
app.use(express.json());
app.listen(3000);

app.set(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
      res.render('main');
})

app.post('/', async (req, res)=>{
      const {url} = req.body;
      const Array = [];

      try {
            const videoInfo = await ytdl.getInfo(url);
            const videoformats = ytdl.filterFormats(videoInfo.formats, "videoandaudio");
            videoformats.map((item)=>{
                  Array.push(item.url);
            });

            let redirection = Array[0];
            res.json({redirectUrl: redirection});
      } 

            
            
      catch (error) {
            console.log(error);
      }  

      
})



