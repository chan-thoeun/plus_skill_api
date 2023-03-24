import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import SignUpMain from '../../components/sign-up';

export default function SignUp() {
    return (
        <Wrapper>
            <SEO pageTitle={'Sign In'} />
            <SignUpMain />
        </Wrapper>
    )
}
