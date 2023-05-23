import PropTypes from 'prop-types';
import { AvatarImg, List, ListItem, Name, Status } from 'components/FriendsList/FriendList.styled';
const FriendList = ({friends}) => {
  return (
    <List>
        {friends.map((e)=><FriendListItem key={e.id} {...e}/>)}
    </List>
  )
}

function FriendListItem({avatar, name, isOnline}){
    return (
        <ListItem>
            <Status isOnline={isOnline} />
            <AvatarImg src={avatar} alt="User avatar" />
            <Name>{name}</Name>
        </ListItem>
    )
}

export default FriendList

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
      }))
}