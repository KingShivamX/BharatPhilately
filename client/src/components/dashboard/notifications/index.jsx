import React from 'react'
import notifications from '../../../config/noticationsData'
import { Trash2 } from 'lucide-react'
import { notification } from 'antd';

const Notifications = () => {
  const openNotification = (notify) => {
    notification.open({
      message: notify.message,
      description: notify.description,
    })
  }
  return (
    <div className="p-6 min-h-screen">
      <div>
        <h2 className="text-xl font-semibold mb-5">Notifications</h2>
        <p className="text-sm text-gray-500">Tap on the notification to mark it as read</p>
      </div>
      <div
        id="notification-list"
        className="max-h-[75vh] overflow-y-auto space-y-4 pr-2"
      >
        {notifications.map((notify) => (
          <div
            key={notify.id}
            onClick={() => openNotification(notify)}
            className={`p-6 rounded-lg border transition-all cursor-pointer duration-300 flex items-center justify-between hover:bg-gray-100
                    ${notify.status === 'read' ? 'border-l-4 border-secondary bg-white' : 'border-l-4 border-gray-300 bg-gray-50'}`}
          >
            <div>
              <p className="text-md font-normal text-gray-900">{notify.message}</p>
              <p className="text-xs text-gray-500">{notify.dateTime}</p>
            </div>
            <div className='bg-red-200 p-2 rounded-full hover:bg-red-300 cursor-pointer transition-all duration-200'>
              <Trash2 className="size-4 text-red-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notifications