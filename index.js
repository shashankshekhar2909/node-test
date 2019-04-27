const express = require('express');

const app = express();

app.get('/',(req,res)=>{
	res.send('Hi there 123');
});

/*app.listen(8001,()=>{
	console.log('listening on port 8080');
});
*/
app.listen(process.env.PORT || 3000);
 
module.exports = app;