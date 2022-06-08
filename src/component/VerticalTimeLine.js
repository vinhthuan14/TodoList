import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules';

export const MyVerticalTimeLine = ({ todos }) => {
            console.log(todos)
  return (
      <VerticalTimeline>

        {todos.map((item) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={item.deadline}
                //   iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  iconStyle={!item.isComplete ? {background:"#E16071"}: {background:"#66EB73"}}
                  key={item.id}
            >
                        <h3 className="vertical-timeline-element-title">{item.title}</h3>
              {/* <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4> */}
              <span >
                {item.text}
              </span>
                  <div>
                      {item.isComplete ?
                    (
                      <span>Đã hoàn thành</span>
                  )
                      : (
                  <span>Chưa hoàn thành</span>
                      )}
                </div>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    )

}
