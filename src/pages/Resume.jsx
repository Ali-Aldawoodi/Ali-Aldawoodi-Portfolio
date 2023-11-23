const resumeUrl = "https://aep-cs-blobstore-prod-va6-data.s3-accelerate.amazonaws.com/6da61e01-5841-4d86-9732-74d3489af04c?x-user-client-id=4e8734fbb5d4451882988f3284599e51&x-region=va6&x-version-id=2&x-partition-prefix=f15a7e813677a217ebdf7b6d8d44cd6bc9171a37ab767eb757c05f56f2e775620cfb1906bf22988d9bf20c&x-resource-id=8c5c2ef3667ca810f3a92e1e832bbd3bcd63036fad052cdf72855904aee072391ab41d5b&x-key-id=BN5JZ&response-content-disposition=attachment%3B%20filename%3D%22Resume%25202023%2520New%2520%25286%2529.docx%22&response-content-type=application%2Fvnd.openxmlformats-officedocument.wordprocessingml.document&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQD%2BmmHkNgji1Z2x4lcC22cdFxUZDOACzT1Baq2KmL6TqQIgFjYl73qTclyv4cwa7R9%2FrZK7oyeeL6VkVPlvVJt3qxUq6wEIOhACGgw3NjY5Njk4NDQwNzgiDDfW%2FjGLH6SfoAkYBSrIAa2InSIzPg33fNiQJMtFBJQjaT2Jx11HQ5O6Bogind5m%2FLoMQrgfFLs1U8xg92gOoV8jkLA9TnIGMi0wINWSmxCu7aihSoK6WAHMPQ3xL0e%2FMWXqp6RbHv9EjapZ4hbHHuL3uWWJnv858%2Bz7TMPt1y0iQoZgL7rHGIFJoABcEN4aRJVvqbKHPqXy7%2FOUdt0PMBuUUG%2FJPfJi63xr3h%2FJUWha2FofzeyY7gXtXN1imsgISjBVIFxngTNtf%2FG7Ov%2B3iI4rpay4iI6jMJ%2FE%2BqoGOpgBk7cQWasJ7ralHmkADAwTV7YqGTclVcRbYtpquaDCwd0cn50xpX7eHjziahAmSTCFs6xQSQFTKG7LJrxxTxqeDmbJAw5YNAG5Yn7unr6awbPjJiGkVyIhp6fN%2F89H4QylS1xZh94VKtOLAP0Nr6UujJjuCSCuGdK0L3fKjqZ%2Fi5bBgq2x8ZeGyLtDldDIFhDMzTTlFAV9KiA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231123T005928Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3FEXXCFXDKGQEMAO%2F20231123%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=16a8b7849300bb3916a2656a186d3dd68c940225f3607c589d095ad20e2fa158"

export default function Resume() {
    return (
    <div>
    <h3>Resume</h3>
    <a href= {resumeUrl}> Resume </a>

    <h4>Proficiencies:</h4>
        <ul>
            <li>HTML</li>
            <li>Javascript</li>
            <li>CSS</li>
            <li>APIs</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Mongo DB</li>
            <li>SQL</li>
        </ul>
    </div>
    )
}