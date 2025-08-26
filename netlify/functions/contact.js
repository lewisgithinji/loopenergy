exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    }
  }

  try {
    const { name, email, message } = JSON.parse(event.body)
    
    // Here you would typically send the email using a service like SendGrid
    // For now, we'll just log it and return success
    console.log('Contact form submission:', { name, email, message })
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully' }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send message' }),
    }
  }
}