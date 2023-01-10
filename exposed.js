// Sample code containing tokens, keys, and credentials 

const API_KEY = 'd547a89b-982c-46e2-ac32-74e1b3f3e23a';
const API_TOKEN = 's84hgb56-a9fh-4d84-c6f4-d8kg74h3e37g';

Access key ID: AKIAIOSFODNN7EXAMPLE
Secret access key: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

const USERNAME = 'Attacker';
const PASSWORD = 'I@mAttack1ng#273';
const EMAIL_ID = 'attacker@testing.com';

const CREDENTIALS = {
    username: USERNAME,
    password: PASSWORD,
    email: EMAIL_ID
} 

const headers = {
    'API-KEY': API_KEY,
    'API-TOKEN': API_TOKEN
};

fetch('https://example.com', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(CREDENTIALS)
})
.then(response => response.json())
.then(data => {
    // Do something with the data
})
.catch(err => {
    console.error(err);
})
