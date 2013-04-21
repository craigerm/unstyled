mkdir dist -p
filename=`(echo -n "dist/"; echo -n \`git describe\`; echo ".zip") | cat`

echo "Exporting to file $filename"

if [ -f "$filename" ];
then
  echo "Can't export! The file already exists."
  exit
fi

git archive HEAD --format=zip > "$filename"
echo "Done."
