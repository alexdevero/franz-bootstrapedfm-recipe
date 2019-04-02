module.exports = (Franz) => {
  const getMessages = function getMessages() {
    const directMessages = document.querySelectorAll('.d-header-icons .unread-notifications').length

    Franz.setBadge(directMessages)
  }

  Franz.loop(getMessages)
}
