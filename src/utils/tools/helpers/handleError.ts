type GenericObj = {
  [key: string]: any;
};

export const handleCatchError = ({
  error,
  history,
}: //   redirect,
{
  error: any;
  history: GenericObj;
  //   redirect: string;
}) => {
  console.log("handleCatchError", error);
  if (
    (error?.statusCode > 399 && error?.statusCode < 500) ||
    (error?.statusCode > 199 && error?.statusCode < 300)
  ) {
    history.push(`pathRoutes.error, redirect`);
    return;
  }
  history.push(`pathRoutes.try, redirect`);
};

export const throwError = (response: GenericObj | undefined) => {
  throw response;
};
