// layout
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/search', component: Search, layout: null },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

export { publicRoutes };
