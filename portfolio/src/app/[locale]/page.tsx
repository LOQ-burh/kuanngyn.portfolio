"use client";

import { useState } from 'react';
import { IntroduceLoad } from '@/common/components/molecules/loader';
import { IntroPage } from '@/common/components/organisms/home';
import { Header } from '@/common/components/organisms/header';
import { ShareSocial } from '@/common/components/molecules/shareSocial';
// import { Footer } from '@/common/components/organisms/footer';

export default function HomePage() {
    const [loading, setLoading] = useState(true);

    return loading
        ? (<IntroduceLoad setLoading={setLoading} />)
        : (
            <>
                <Header />
                <ShareSocial />
                <div className="w-full flex justify-center items-start">
                    <IntroPage />
                </div>
                {/* <Footer /> */}
            </>
        );
}