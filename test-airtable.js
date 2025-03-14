# Create a file called test-airtable.js
$env:AIRTABLE_API_KEY="patWCwjwsCIHmkuMP.4da98f14a0cfeb86431bf1b80d7ae807f9a419ac1499239dab78bbe6b25c31f2"
$env:AIRTABLE_BASE_ID="appu0B90mhCU4R1PT"

echo "const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_BASE_ID);

// List all tables to verify connection
base.tables().then(tables => {
  console.log('Available tables:');
  tables.forEach(table => {
    console.log(`- ${table.name} (${table.id})`);
  });
}).catch(err => {
  console.error('Error:', err);
});" > test-airtable.js

# Run the test script
node test-airtable.js