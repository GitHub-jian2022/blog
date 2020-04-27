import {Avatar,Divider} from 'antd'
import '../public/style/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588011292608&di=58c469b331bb217530f148fe31638f56&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F3b87e950352ac65cce6c2bd0f1f2b21193138a2c.jpg"  /></div>
            <div className="author-introduction">
                光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={30} icon="github" className="account"  />
                <Avatar size={30} icon="qq"  className="account" />
                <Avatar size={30} icon="wechat"  className="account"  />

            </div>
        </div>
    )

}

export default Author