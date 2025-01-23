"use client";

import { useState } from 'react';
import { IntroduceLoad } from '@/common/components/molecules/loader';
import { IntroPage } from '@/common/components/organisms/home';
import { PageLayoutPortfolio } from '@/common/components/templates';
import { ContactPage } from '@/common/components/organisms/contact';
import { Copyright } from '@/common/components/organisms/copyright';

export default function HomePage() {
    const [loading, setLoading] = useState(true);

    return loading
        ? (<IntroduceLoad setLoading={setLoading} />)
        : (
            <PageLayoutPortfolio>
                <IntroPage />
                <ContactPage />
                <Copyright />
            </PageLayoutPortfolio>
        );
}