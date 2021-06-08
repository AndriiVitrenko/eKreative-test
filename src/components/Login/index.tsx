import { FC, useCallback } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser } from '../../store/videoSlice';
import './style.scss';

export const Login: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onGoogleSuccess = useCallback((googleUser: any) => {
    dispatch(addUser({
      token: googleUser.tokenObj.access_token
    }));

    history.push('/video-list')
  }, [ dispatch, history ])

  const onFacebookSuccess = useCallback((response: any) => {
    dispatch(addUser({
      token: response.accessToken
    }))
    history.push('/video-list')
  }, [ dispatch, history ])

  return (
    <div className='log-in'>
      <GoogleLogin
        clientId='259145725377-ges8mp4obh66o4r2hv179bcpk0rtn77d.apps.googleusercontent.com'
        onSuccess={onGoogleSuccess}
        className='google'
      />

      <FacebookLogin
        appId='6239770956048195'
        callback={onFacebookSuccess}
        fields='name,email,picture'
      />
    </div>
  )
}
