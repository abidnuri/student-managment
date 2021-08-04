module.exports = {
    events: () => {
        return ['Cooking', 'Love', 'Abid']
    },
    createEvent: (args) => {
        const eventName = args.name;
        return eventName;
      }
}