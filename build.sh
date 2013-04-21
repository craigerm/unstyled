mkdir dist -p
filename=`date --rfc-3339=date`
echo "Exporting to file dist/$filename.zip"
if [ -f "dist/$filename.zip" ];
then
  echo "Can't export! The file already exists."
  exit
fi

git archive HEAD --format=zip > "dist/$filename.zip"
echo "Done."

