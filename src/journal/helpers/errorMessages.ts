
export const errorMessagesFirebase = ( errorCode : string ) : string => {
    if ( errorCode === 'auth/email-already-in-use' ) {
        return 'Email already in use';
    } else if ( errorCode === 'auth/invalid-email' ) {
        return 'Invalid email';
    } else if ( errorCode === 'auth/operation-not-allowed' ) {
        return 'Operation not allowed';
    } else if ( errorCode === 'auth/weak-password' ) {
        return 'Weak password';
    } else if ( errorCode === 'auth/wrong-password' ) {
        return 'Wrong password';
    } else if ( errorCode === 'auth/user-not-found' ) {
        return 'User not found';
    } else if ( errorCode === 'auth/user-disabled' ) {
        return 'User disabled';
    } else if ( errorCode === 'auth/user-token-expired' ) {
        return 'User token expired';
    } else if ( errorCode === 'auth/requires-recent-login' ) {
        return 'Requires recent login';
    } else if ( errorCode === 'auth/too-many-requests' ) {
        return 'Too many requests';
    } else if ( errorCode === 'auth/invalid-api-key' ) {
        return 'Invalid API key';
    } else if ( errorCode === 'auth/app-not-authorized' ) {
        return 'App not authorized';
    } else if ( errorCode === 'auth/invalid-user-token' ) {
        return 'Invalid user token';
    } else if ( errorCode === 'auth/network-request-failed' ) {
        return 'Network request failed';
    } else if ( errorCode === 'auth/web-storage-unsupported' ) {
        return 'Web storage unsupported';
    } else if ( errorCode === 'auth/invalid-credential' ) {
        return 'Invalid credential';
    } else if ( errorCode === 'auth/invalid-verification-code' ) {
        return 'Invalid verification code';
    } else if ( errorCode === 'auth/invalid-verification-id' ) {
        return 'Invalid verification id';
    } else if ( errorCode === 'auth/missing-verification-code' ) {
        return 'Missing verification code';
    } else if ( errorCode === 'auth/missing-verification-id' ) {
        return 'Missing verification id';
    } else if ( errorCode === 'auth/invalid-phone-number' ) {
        return 'Invalid phone number';
    } else if ( errorCode === 'auth/invalid-recipient-email' ) {
        return 'Invalid recipient email';
    } else if ( errorCode === 'auth/invalid-sender' ) {
        return 'Invalid sender';
    } else if ( errorCode === 'auth/invalid-message-payload' ) {
        return 'Invalid message payload';
    } else if ( errorCode === 'auth/invalid-message-ttl' ) {
        return 'Invalid message ttl';
    } else if ( errorCode === 'auth/invalid-message-priority' ) {
        return 'Invalid message priority';
    } else if ( errorCode === 'auth/missing-message-payload' ) {
        return 'Missing message payload';
    } else if ( errorCode === 'auth/invalid-message-name' ) {
        return 'Invalid message name';
    } else if ( errorCode === 'auth/invalid-multi-factor-info' ) {
        return 'Invalid multi-factor info';
    } else if ( errorCode === 'auth/invalid-multi-factor-session' ) {
        return 'Invalid multi-factor session';
    } else if ( errorCode === 'auth/missing-multi-factor-info' ) {
        return 'Missing multi-factor info';
    } else if ( errorCode === 'auth/invalid-multi-factor-auth-session' ) {
        return 'Invalid multi-factor auth session';
    } else if ( errorCode === 'auth/invalid-phone-number-session' ) {
        return 'Invalid phone number session';
    } else if ( errorCode === 'auth/invalid-recipient-country' ) {
        return 'Invalid recipient country';
    } else if ( errorCode === 'auth/invalid-sender-country' ) {
        return 'Invalid sender country';
    }
    return 'Unknown error';
}
