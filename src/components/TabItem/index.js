import './index.css'

const TabItem = props => {
  const {tabDetails, updatedActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeClassName = isActive ? 'active-tab-btn' : ''

  const onActive = () => {
    updatedActiveTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeClassName}`}
        onClick={onActive}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
