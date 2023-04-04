import {watchFile} from 'fs';
import {spawn} from 'child_process';

watchFile('helloworld.txt', (curr, prev) => {
  console.log(`File was ${prev.size} bytes before it was modified.`);
  console.log(`Now file is ${curr.size} bytes.`);

  const cat = spawn('cat', ['-n', 'helloworld.txt']);
  //cat.stdout.pipe(process.stdout);

  const wc = spawn('wc', ['-l']);
  cat.stdout.pipe(wc.stdin);

  //variable to store the data
  let data1 = '';

  //when data is received

  wc.stdout.on('data', (data) => {
    data1 += data;
  }
  );

  //when data is finished
  wc.stdout.on('close', () => {
    console.log(`Number of lines in file: ${data1}`);
  } 
  );


});


