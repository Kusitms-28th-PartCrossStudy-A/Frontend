import { selector } from 'recoil';
import axios from 'axios';

export const postListApiState = selector({
  key: 'postListApiState',
  get: async () => {
    const res = await axios.get('https://kusitms.shop/api/v1/articles');
    const data = res.data.data;

    return data;
  }
});
