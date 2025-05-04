const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const path = require('path');

const sessionClient = new dialogflow.SessionsClient({
  keyFilename: path.join(__dirname, 'lexinica-key.json'),
});

async function runDialogFlowQuery(text, sessionId = uuid.v4()) {
  const sessionPath = sessionClient.projectAgentSessionPath(
    'lexinica-xppc',
    sessionId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text,
        languageCode: 'es-419',
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  return responses[0].queryResult;
}

module.exports = { runDialogFlowQuery };