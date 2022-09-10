import defaultAvatar from '../assets/image/dashboard/fansList/defaultAvatar.svg'

export default {
  methods: {
    defaultAvatar(e){
      e.target.src = defaultAvatar
    }
  }
}
