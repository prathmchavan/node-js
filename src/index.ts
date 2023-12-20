import express from 'express';
import EventEmitter from 'events';

const app = express();

class Emitter extends EventEmitter {
  Ordernumber: number;

  constructor() {
    super();
    this.Ordernumber = 0;
  }

  order() {
    this.Ordernumber++;
    this.emit('event', this.Ordernumber); // Emit 'event' with Ordernumber as an argument
  }
}

const eventEmitter = new Emitter();


eventEmitter.on('event', (Ordernumber) => {
  console.log(`Order Number: ${Ordernumber}`);
});

app.get('/', (req, res) => {
  eventEmitter.order(); // Increment Ordernumber and emit 'event'
  res.json('Order placed!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
