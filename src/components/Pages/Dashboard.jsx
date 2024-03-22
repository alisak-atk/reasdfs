import { Height } from '@mui/icons-material';
import { Typography } from 'antd'
// import '../CSS/Dashboard.css'
import { Card } from 'antd';
function Dashboard() {
  return (
    <>
    <Card title="Dasboard" bordered={false} 
    style={{ 
      width: 500
    }}>
    <p>Card content</p>
    <p>Card content</p>
  </Card>

    </>
  )
}

export default Dashboard