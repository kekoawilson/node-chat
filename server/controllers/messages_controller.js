var messages = [];
var id = 0;

module.exports = {
    create(req, res) {
        const newMessage = {
            text: req.body.text,
            time: req.body.time,
            id: id
        }
        messages.push( newMessage )
        id++
        res.status(200).send( messages )

    },

    read(req, res) {
        res.status(200).send(messages)
    },

    update(req, res) {
        const id = parseInt(req.params.id)
        const messageUpdate = messages.filter((message) => {
            return message.id === id
        })

        messageUpdate[0].text = req.body.text
        res.status(200).send( messages )

    },

    delete(req, res) {
        const id = parseInt(req.params.id)
        messages = messages.filter((message) => message.id !== id)
        res.status(200).send( messages )
    }
}