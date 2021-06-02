const getShortMessages = (messages) => {
    
    return messages.filter((msg)=> {
        if (msg.message.length<50) return msg.message
    }).map(msg=> msg.message) 
  }

module.exports = getShortMessages