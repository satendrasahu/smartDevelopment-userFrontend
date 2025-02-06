import * as Yup from "yup";
export const initialValues = {
  fullName:"",
  helloText:"",
  shortIntroText:""
};

export const shortInfoSchema = (t) => {
  return Yup.object().shape({
    fullName: Yup.string().required(t('isRequired',{text :t('fullName')})),
    helloText: Yup.string().required(t('isRequired',{text :t('helloText')})),
    shortIntroText: Yup.string().required(t('isRequired',{text :t('shortIntroText')})),

  });
};
