import { useTranslations } from "next-intl";

export function IntroPage() {
    const t = useTranslations('HomePage');
    return (
        <div className="flex justify-center items-center w-[1222px] min-h-[72vh]">
            <div className="container relative flex flex-col">
                <h1 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                    {t('title')}
                </h1>
                <div className="mt-6 text-gray-400 md:text-lg">
                    <p className="max-w-[590px] text-justify">
                    {t('description')}
                    </p>
                    <p className="max-w-[590px] text-justify">
                    {t('detail')}
                    </p>
                </div>
            </div>
        </div>
    );
};
