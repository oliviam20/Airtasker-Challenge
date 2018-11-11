import React, { Component, Fragment } from 'react'

class ActivityFeed extends Component {
  constructor(props) {
    super(props)
  }

  getName = () => {
    let profileIdObj = {}
    this.props.data.profiles.forEach((x) => {
      profileIdObj[x.id] = x.abbreviated_name
    })
    return profileIdObj // returns object with id as key and name as value

    //output: {37: "Simon R.", 490: "James T.", 1501: "Jonathan L.", 2046: "Kang C.", 2663: "Edward T."}
  }

  getEvent = () => {
    let eventList = []
    this.props.data.activity_feed.map((x) => {
      eventList.push(x)
    })
    return eventList
  }

  getTaskName = () => {
    let taskName = {}
    this.props.data.tasks.forEach((x) => {
      taskName[x.id] = x.name
    })
    return taskName
    // output: {6333: "Buy me McDonalds", 6441: "Teach me how to fly a drone", 6469: "Pick up roses from florist", 6470: "Take me to rails camp", 6471: "Do a react javascript test for me", 6472: "Pick my car up from garage", 6473: "Guitar lessons"}
  }

  getFeed = () => {
    const nameId = this.getName()
    const events = this.getEvent()
    const taskName = this.getTaskName()
    let feed = events.map((x) => {
      console.log(x) // activity object
      if (x.event === 'posted') {
        return <li><span className="blue">{nameId[x.profile_ids]}</span> <span className="uppercase xsmall boulder">posted a task</span> <span className="blue">{taskName[x.task_id]}</span></li>
      }
    })
    return feed
  }

  render() {
    return (
      <Fragment>
        <ul className="col-12 col-bleed-y">{this.getFeed()}</ul>
      </Fragment>
    )
  }
}

export default ActivityFeed