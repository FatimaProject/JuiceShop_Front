function calbackGetAllJuice(data)
{
  if (data.Error)
  {
    console.log(data.ErrMsg);
  }
  else
  {
    console.log(data);
  }
}

function Main()
{
    // $.JUICE.GetRequest(`api/juice/`, {}, calbackGetAllJuice );
}