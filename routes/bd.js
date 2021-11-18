//*BD

const { Pool } = require('pg');
const pool = new Pool({
	connectionString:process.env.DATABASE_URL,
	ssl:{
		rejectUnautorised:false
	}
}));

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) => {
	try{
		const client =await pool.connect();
		const result =await client.query('SELECT *FROM test_table');
		const results = {'results': (result) ? result.rows : null};
		res.render('bd', results);
		client.release();
	}catch(error){
		console.error(err);
		res.send("Error "+err);
	}
} 
});

module.exports = router;
