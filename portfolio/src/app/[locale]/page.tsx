"use client";

import { useState } from 'react';
import { IntroduceLoad } from '@/common/components/molecules/loader';
import { IntroPage } from '@/common/components/organisms/home';
import { PageLayoutPortfolio } from '@/common/components/templates';

export default function HomePage() {
    const [loading, setLoading] = useState(true);

    return loading
        ? (<IntroduceLoad setLoading={setLoading} />)
        : (
            <PageLayoutPortfolio>
                <IntroPage />
            </PageLayoutPortfolio>
        );
}