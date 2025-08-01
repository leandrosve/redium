import Button from "@/components/common/Button";
import { ROUTES } from "@/routes/routes";
import { House, ShieldQuestionMark } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MissingPage = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center w-full mt-20">
      <ShieldQuestionMark className="h-30 w-30 opacity-55" />
      <div className="text-center w-full p-5 font-bold text-sm  relative">
        <h1 className="md:text-xl opacity-55">{t("common.missingResource")}</h1>
      </div>
      <Link to={ROUTES.HOME}>
        <Button as='span' size="lg" className="mt-5 gap-3"><House/>{t("common.backHome")}</Button>
      </Link>
    </div>
  );
};

export default MissingPage;
