const express = require('express');
// const useragent = require('useragent');
const app = express();

const PORT = process.env.PORT || 3000;


app.get('/redirect', (req, res) => {
    const agent = req.headers['user-agent'];
    console.log('agent, ', agent)
    if (agent.includes('Macintosh') || agent.includes('iPhone') || agent.includes('iPad')) {
        // Redirect to Apple App Store
        res.redirect('https://apps.apple.com/app/id310633997');
    } else if (agent.includes('Android')) {
        // Redirect to Google Play Store
        res.redirect('https://play.google.com/store/apps/details?id=com.whatsapp');
    } else {
        res.send("Device not recognized. Please visit the app store manually.");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
