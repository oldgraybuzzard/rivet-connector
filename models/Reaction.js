const { Schema, model, Types } = require('mongoose');



const Reaction = model('Reaction', reactionSchema);

module.exports = (Reaction);